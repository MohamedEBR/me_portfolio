import sys

path = '/home/momo/GitHub/me_portfolio/frontend_react/src/container/Header/Header.jsx'

try:
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
except FileNotFoundError:
    print(f"File not found: {path}")
    sys.exit(1)

# Target lines: 92 to 124 (1-based)
# Indices: 91 to 123 (0-based)
# Line 91 (index 90) is `{`
# Line 125 (index 124) is `}`

start_idx = 91
end_idx = 123

# Verify context
# Check line 91 (index 90) contains `{` and backtick
# Check line 125 (index 124) contains `}` and backtick
if '`' not in lines[90] or '`' not in lines[124]:
    print("Error: Lines have shifted or context mismatch.")
    print(f"Line 91: {lines[90]}")
    print(f"Line 125: {lines[124]}")
    sys.exit(1)

new_lines = []
for i in range(start_idx, end_idx + 1):
    line = lines[i]
    # Replace Braille blank (U+2800) with space (U+0020)
    line = line.replace('\u2800', ' ')
    new_lines.append(line)

# Calculate min indentation to stripping
# Note: if lines start immediately, min_indent will be 0.
min_indent = 1000
for line in new_lines:
    if line.strip():
        # Get number of leading spaces
        indent = len(line) - len(line.lstrip(' '))
        if indent < min_indent:
            min_indent = indent

if min_indent == 1000:
    min_indent = 0

print(f"Detected min indentation: {min_indent}")

base_indent_str = " " * 18

final_lines = []
for line in new_lines:
    # 1. Strip original indentation (min_indent)
    #    We only strip up to min_indent checks to avoid eating into art if art is jagged
    if len(line) >= min_indent:
        # Check if the prefix is actually whitespace
        prefix = line[:min_indent]
        if prefix.strip() == '': 
            content = line[min_indent:]
        else:
            # Should not happen if min_indent is calculated correctly on all lines
            content = line.lstrip() 
    else:
        content = line.lstrip()
    
    # 2. Add base indentation if line is not empty
    if content.strip():
        # rstrip to remove trailing newline before adding it back?
        # content likely has newline at end
        final_lines.append(base_indent_str + content)
    else:
        final_lines.append('\n')

lines[start_idx : end_idx + 1] = final_lines

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully cleaned ASCII art.")
