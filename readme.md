# tex2typst-cli

Simple wrapper for [qwinsi/tex2typst](https://github.com/qwinsi/tex2typst)

## Installation

```bash
# Clone the repository
git clone https://github.com/js0ny/tex2typst-cli.git
cd tex2typst-cli

# Install dependencies
pnpm install

# Build the project
pnpm build

# Link the binary globally (optional)
pnpm link --global
```

## Usage

```bash
# Convert TeX to Typst (default)
tex2typst-cli "e \overset{\text{def}}{=} \lim_{{n \to \infty}} \left(1 + \frac{1}{n}\right)^n"

# Convert Typst to TeX
tex2typst-cli --input typst "e eq.def lim_(n arrow.r infinity)(1 + frac(1, n))^n"

# Use a file as input (prepend @ to the filename)
tex2typst-cli @input.tex
tex2typst-cli --input typst @input.typ

# Output to a file
tex2typst-cli --output output.typ "e \overset{\text{def}}{=} \lim_{{n \to \infty}} \left(1 + \frac{1}{n}\right)^n"
```

## Options

- `-i, --input <type>`: Specify input type (`tex` or `typst`), default is `tex`
- `-o, --output <file>`: Write output to file instead of stdout
- `-h, --help`: Display help information
- `-V, --version`: Display version information

## Examples

```bash
# Convert TeX to Typst
tex2typst-cli "\int_{0}^{1} x^2 dx"
# Output: integral_0^1 x^2 dx

# Convert Typst to TeX
tex2typst-cli --input typst "sum_(i=1)^n i^2"
# Output: \sum_{i=1}^{n} i^2
```

## License

MIT
