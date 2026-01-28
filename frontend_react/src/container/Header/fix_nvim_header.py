import sys

path = '/home/momo/GitHub/me_portfolio/frontend_react/src/container/Header/Header.jsx'

try:
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
except FileNotFoundError:
    print(f"File not found: {path}")
    sys.exit(1)

# Target lines: 155 to 167 (1-based) for the ASCII content
# Indices: 154 to 166 (0-based)
# Line 154 (index 153) is `{`
# Line 168 (index 167) is `}`

start_idx = 154
end_idx = 166

# Verify context
if '`' not in lines[153] or '`' not in lines[167]:
    print("Error: Lines have shifted or context mismatch.")
    print(f"Line 154: {lines[153]}")
    print(f"Line 168: {lines[167]}")
    sys.exit(1)

new_lines = []
for i in range(start_idx, end_idx + 1):
    line = lines[i]
    
    # Strip leading whitespace
    stripped = line.lstrip()
    
    # Remove trailing newline to append freshly
    stripped = stripped.rstrip('\n')
    
    if stripped:
        new_lines.append(stripped + '\n')
    else:
        new_lines.append('\n')

lines[start_idx : end_idx + 1] = new_lines

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully cleaned NVIM ASCII art.")
