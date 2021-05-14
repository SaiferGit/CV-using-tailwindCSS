This repository is for tracking the learning curve of tailwindCSS. Here I will design my CV as a 2nd training project of DSi.

Few Learning links I used:
- [Net Ninja playlist](https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw)
- [Official website](https://tailwindcss.com/)

## Introductory Steps
---

### What is Tailwind CSS
- A CSS framework made up of utility classes. 
- Much lower-level than Bootstrap, Materialize etc.
- We combine different lower level utility classes to design a component. For example if we want to design a card in `Tailwind` we need to combine `rounded`, `shadow`, `p-2`, `bg-white` classes. So our code will be `class="rounded shadow p-2 bg-white"`.
This doesn't mean we have to do more work than bootstrap btw. 

### How we can use Tailwind CSS in our project
Install Tailwind using **n**ode **p**ackage **m**anager. So we will ned node.js installed in our computer.\
Steps:
1. install node.js v12+.
    ```
    sudo apt update
    curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
    sudo apt -y install nodejs
    node  -v
    ```
2. install npm
3. Go to inside project folder, create a new *package.json* file using `npm init -y`. We need this to track our installed dependencies.
4. Install `tailwind`, `postcss`, `autoprefixer` dependencies using `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

### How Tailwind works

<img src="./Snapshots/tailwindWorkingMethod.png">
We create a src folder where all of our src files will be there and write all of our code there incluing styles.css if needed. Another folder named public where our output css gonna go after tailwind has processed it. Public folder also contains html and js files. Public folder will evnetually deployed to webhost on the Internet.

## Start building
---

### Include Tailwind in your CSS
1. Create a CSS file if you don't already have one, and use the @tailwind directive to inject Tailwind's `base`, `components`, and `utilities` styles:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
2. In your scripts inside package.json remove existings and put `"build-css": "npx tailwindcss-cli@latest build ./src/styles.css -o ./public/styles.css"`
3. Run `npm run build-css` which will build tailwind necessary utility files.
