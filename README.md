# Zensical Hide/Show ToC

A simple, pure CSS/JavaScript dependency-free front-end add-on that adds a header control to hide or show a native Zensical's **left navigation sidebar**. The right-hand page table of contents remains visible because it's useful on big documents. The user's choice is stored in the browser.

[Zensical](https://github.com/zensical/zensical) is a modern static site generator built by the creators of Material for MkDocs. Write your documentation in Markdown and create a professional static site for your Open Source or commercial project in minutes – searchable, customizable, more than 60 languages, for all devices.

## Behavior

- Hides only `.md-sidebar--primary`; the right page ToC remains visible.
- Expands the content grid when the left sidebar is hidden.
- Uses a native button with `aria-pressed` and keyboard support.
- Persists the setting in `localStorage` and supports instant navigation.
- Build for default Material-based Zensical theme DOM selectors.

## Install

### Assumptions

* have latest Zensical (0.0.74) installed in a venv Python container
	* check with `.venv/bin/zensical --version`
* I have the 'docs' folder as a main in your project, set in 'zensical.toml' file as following:

```toml
[project.markdown_extensions.pymdownx.snippets]
base_path = "docs"
```

Feel free to setup other folder for your site settings if needed.

### Steps

1. Copy the two files (css and js) directly into a project folder such as `docs/common/`. 
2. Add the paths to `zensical.toml` in the project root folder:
```toml
[project]
extra_css = ["common/hide-show-toc.css"]
extra_javascript = ["common/hide-show-toc.js"]
```
3. Rebuild and deploy your site. New button appears in the header before the color-scheme switch.

### Customize labels

Edit `hideLabel` and `showLabel` near the top of `hide-show-toc.js` file.

## License

Free to use. Do whatever you consider useful for humanity. See main MIT license terms: [LICENSE](LICENSE)

## Author

<img src="https://raw.githubusercontent.com/testitquickly/Software-Testing-Glossary/master/images/alexei_lupan.jpg" alt="Alexei Lupan" height="200" align="right" />
Alexei Lupan, QA. I'm interested in complex test design problems, baritone guitar and Robert Heinlein's books.

Blog: [testitquickly.com](https://testitquickly.com/) (ru)

Other projects:

* [github.com/testitquickly/bystro.linux](https://github.com/testitquickly/bystro.linux) (ru)
* [github.com/testitquickly/bystro.linux.nas](https://github.com/testitquickly/bystro.linux.nas) (ru)
