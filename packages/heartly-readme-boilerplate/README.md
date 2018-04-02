<h1>Heartly Readme Boilerplate 💕</h1>

<h5>This repository is a README boilerplate. It's open source. Updates and suggestions are appreciated.</h5>

---

<p align="center">
  <a href="#setup">Setup</a>&nbsp;&nbsp;
  <a href="#standards">Stardards</a>&nbsp;&nbsp;
  <a href="#headers">Headers</a>&nbsp;&nbsp;
  <a href="#navigation">Navigation</a>&nbsp;&nbsp;
  <a href="#api-documentation">API Documentation</a>&nbsp;&nbsp;
  <a href="#testing">Testing</a>&nbsp;&nbsp;
  <a href="#cite">Cites & Thanks</a>
</p>

---

Readmes are used to describe the contents of code repositories. Besides the title, description, and code directory, readmes are the first thing users see. This boilerplate contains items to assist in writing readmes.

## Setup

Install Heartly Readme Boilerplate
```bash
npm i heartly-readme-boilerplate --save-dev
```

Copy `DEFAULT_README.md`
```bash
npx copy-heartly-default-readme
```

Edit `DEFAULT_README.md` to work as needed.

## Standards

The standard section is the core section of the readme-boilerplate. It contains definitions and context for the rest of the readme-boiler-plate.

###  Headers

Headers for `readme`'s should include a title `h1`, a sub-description `h5`, and a description `p`. After the header, the readme should contains sections that contain titles `h2` and sub-titles `h3`.

---

The readme boiler plate writes out the title with the `h1` tag rather than `markdown` so that the element is centered using the `align` attribute once [marky-markdown issue 404](https://github.com/npm/marky-markdown/issues/404) is fixed. 

```html
<h1>This a header 💕</h1>
```

The pre-description is added before a full description. It is written on like this so that the element can be centered (see [here](https://github.com/npm/marky-markdown/issues/404) for why it is not currently).

```html
<h5>This is a pre-description</h5>
```

The description should describe the product. It follows and linebreak `---`.

```markdown
---

A description
```


---


All together, this is a header that can be copied.

```html
<h1 align="center">This a header 💕</h1>

<h5 align="center"This is a pre-description</h5>

---

A description
```

### Navigation

Navigation can be provided if the is more than 1 section to a `readme` or `document`. Navigation links to sections within the `readme` and `document`.

Here is how navigation is written.

```html
<p align="center">
  <a href="#section">section</a>&nbsp;&nbsp;
  <a href="#section">section</a>&nbsp;&nbsp;
  <a href="#section">section</a>
</p>
```


### API Documentation

There is more than 1 way to approach API documentation. For smaller APIs, readmes can document APIs using [tables](#table-format) or [lists](#list-format).

#### Table Format

| Name | Default | Description |
|---|---|---|
| initiate | `function(){}` | it is initiated |
| start | `function(){}` | it is started |

```md
| Name | Default | Description |
|---|---|---|
| initiate | `function(){}` | it is initiated |
| start | `function(){}` | it is started |
```

### List Format

- **API**
  - **initiate:** `f`
     - `function(){}`
     - _example:_ an example
     - a description
  - **start:** `f`
     - `function(){}`
     - _example:_ an example
     - a description

```md
- **API**
  - **initiate:** `f`
     - `function(){}`
     - _example:_ an example
     - a description
  - **start:** `f`
     - `function(){}`
     - _example:_ an example
     - a description
```

----

## Testing

Currently readme render testing is manual. 

## Manual Testing

- Github [Github renderer](http://tmpvar.com/markdown.html) via [Elijah Insua](https://github.com/tmpvar)
- NPM's [marky-markdown renderer](https://revin.github.io/marky-markdown/) via [Revin Guillen](https://github.com/revin)

----

## Contributing

Contributing guidelines can define how to file [issues](https://github.com/heartly/readme-boilerplate/issues), contributors, submitting pull requests, and defining how

<h2 id="cite">Cites & Thanks</h2>

The Heartly project is a set of lists and tools to help make the online code discussions more friendly. It moves forward with inspiration from discussions with [Brian Gonzalez](https://www.briangonzalez.org/), [Jason Farmer](https://github.com/jacefarm), [Patrick Fisher](https://github.com/pwfisher), and [Arjan Singh](https://github.com/arjansingh).

