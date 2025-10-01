# me_url

Online portfolio template built with Astro for projects.

### Website

#### Initial set-up
The first time setting up me_url, go inside the **website** folder install all necessary packages.
```
npm intall
```

#### Local dev

Website uses the SSG Astro. To lauch it locally for dev, navigate into the **website** folder and run

```
npm run dev
```

#### Local build

To create a local build, run:

```
npm run build
```

You can preview the built website:
```
npm run preview
```
#### Deployment

When the **main** branch is pushed to Github, Netflify automatically pulls from it and performs a new build, so a new version is deployed.

To avoid undesired/untested deployments, any code changes should be developed in the **develop** branch and only be merged to **main** once ready for deployment.

#### Collections

##### Adding a new collection

1. Define collection with loader and schema in new file **src/collectionsConfig/[collection-key]**;
2. Import collection definition into **src/content.config.ts** and add it to **collections** object;
3. Add collection to navigation at **src/components/navigation/Navigation.astro**;
4. Set translations for **ui** and **routes** for collection at **src/i18n/ui.ts**;
5. Add collection folder for new collection at \*\*src/collections/[collection-key]/, create entry files inside;
6. Add components folder for new collection at \*\*src/components/collection/[collection-key]/, create appropriate files inside;
7. Add collection item page at **src/pages/[lang]/[collection-key]/[...slug].astro**;
8. For each available language [language], add collection page at **src/pages/[language]/[collection-key]**;
9. Create the collection **ItemLayout\_[collection-key]** at **src/layouts/collections/**;
10. For each available language [language], add collection tags pages at **src/pages/[language]/tags/[collection-key]**.

##### Choosing between .MD and .MDX Files for collection items

**.md** files in Astro are plain Markdown—simple, static, and can’t use components or imported assets, while **.mdx** files allow JSX, component imports, and optimized images, offering more dynamic content at the cost of slightly more complexity.
Use **.md** for simple, static content like plain blog posts, documentation, or tutorials where you don’t need components or imported assets.
Use **.mdx** for dynamic or interactive content where you want to embed components, import images from /src/assets, or include JSX/interactive elements.