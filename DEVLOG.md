# DEVLOG

Educational notes to self.

### Using `tsc` on a source file vs. calling it directly
If you use `tsc` on a source file instead of calling it in the project directory, it will not use the `tsconfig.json` file, which may prevent proper compiling since additional settings may be required. Simply run `tsc` in the root project directory and TypeScript will compile with the settings set in the tsconfig file. Alternatively, use the target parameter, for example, `tsc --target es2016 filename.ts`.

### TypeScript error related to lack of index signarture
In working with TS, I encountered this error from the following code:
```typescript
const entries = {
    'Breakfast': ['Cereal', 'BBQ Chicken', 'Oatmeal'],
    'Lunch': ['Soup', 'Sandwich', 'Lasagna'],
    'Dinner': ['Yogurt', 'Filet Mignon', 'Fish Florentine']
};
```

And here is the error mesage:

```
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ Breakfast: string[]; Lunch: string[]; Dinner: string[]; }'.
  No index signature with a parameter of type 'string' was found on type '{ Breakfast: string[]; Lunch: string[]; Dinner: string[]; }'.
```

The error I was encountering is related to TypeScript's type inference. It occurs because TypeScript is unable to infer the type of the `entries` object, and therefore it assumes it has an "any" type. As a result, when I tried to access `entries[meals[meal]]`, TypeScript generated an error because it could not guarantee that the index (`meals[meal]`) is a valid key for the `entries` object.

To resolve this issue, I had to explicitly define the type of the entries object using an index signature, like so:

```typescript
const entries: { [key: string]: string[] } = {
    'Breakfast': ['Cereal', 'BBQ Chicken', 'Oatmeal'],
    'Lunch': ['Soup', 'Sandwich', 'Lasagna'],
    'Dinner': ['Yogurt', 'Filet Mignon', 'Fish Florentine']
};
```

As we can see, the type of the `entries` object is explicitly defined as `{ [key: string]: string[] }`, indicating that it is an object with keys of type `string` and values as arrays of `string`. By providing this explicit type annotation, the error should was resolved, and my script should be able to access the values of `entries` using the keys from `meals` without any issues.
