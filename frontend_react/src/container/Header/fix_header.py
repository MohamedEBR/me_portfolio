import sys

path = '/home/momo/GitHub/me_portfolio/frontend_react/src/container/Header/Header.jsx'

try:
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
except FileNotFoundError:
    print(f"File not found: {path}")
    sys.exit(1)

# Lines 92 to 120 are the art content.
# In 0-based index: 91 to 119.
# Line 91 (index 90) is `{` line.
# Line 121 (index 120) is `}` line.

start_idx = 91
end_idx = 119

# Verify context to ensure we are editing the right place
if '`' not in lines[90] or '`' not in lines[120]:
    print("Error: Lines have shifted. Aborting.")
    print(f"Line 91: {lines[90]}")
    print(f"Line 121: {lines[120]}")
    sys.exit(1)

new_lines = []
for i in range(start_idx, end_idx + 1):
    line = lines[i]
    # Replace Braille blank with space
    line = line.replace('\u2800', ' ')
    new_lines.append(line)

# Now calculate common empty indentation
min_indent = 1000
for line in new_lines:
    if line.strip(): # if not empty
        indent = len(line) - len(line.lstrip())
        if indent < min_indent:
            min_indent = indent

# If we found a valid min_indent, strip it.
# But keep some indentation relative to the code?
# The code itself is indented by ~18 spaces (based on line 91).
# We should probably strip ALL extra indentation and then apply the base indentation of the file (e.g. 18 spaces).

base_indent_str = " " * 18 # Align with `className` or `{`

final_lines = []
for line in new_lines:
    # Strip the purely whitespace prefix (unicode spaces now)
    stripped = line.lstrip()
    if not stripped:
        final_lines.append('\n') # Keep empty lines empty
    else:
        # We want to remove the specific common offset we found in the ART, not the total strip.
        # But since we want to normalize it, let's just strip and re-indent?
        # The user's art might have relative indentation (centering).
        # Let's subtract `min_indent` from the start of the line.
        
        # Original logic:
        # content = line[min_indent:]
        
        # But wait, maybe the user WANTS it centered?
        # The prompt says "without any whitespace or make sure teh whitespace isnt green".
        # If I strip it all, it moves to the left.
        # Given "whitespace-pre", centering is manual.
        # Use a safe approach: preserve relative indentation, but remove the huge block of padding if it exists.
        
        if len(line) > min_indent:
             content = line[min_indent:]
        else:
             content = line.lstrip() # Should be empty or newline

        # Add base code indentation
        final_lines.append(content)

# Replace in file
lines[start_idx : end_idx + 1] = final_lines

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Updated ASCII art successfully.")
