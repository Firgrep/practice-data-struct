## Educational notes to self

### Using `tsc` on a source file vs. calling it directly
If you use `tsc` on a source file instead of calling it in the project directory, it will not use the `tsconfig.json` file, which may prevent proper compiling since additional settings may be required. Simply run `tsc` in the root project directory and TypeScript will compile with the settings set in the tsconfig file.