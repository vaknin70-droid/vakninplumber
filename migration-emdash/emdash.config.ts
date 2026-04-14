import { config, collection, fields } from "emdash";

export default config({
  collections: [
    collection({
      name: "blog",
      label: "בלוג",
      slug: "blog",
      path: "src/content/blog",
      format: "json",
      schema: {
        title: fields.text({ label: "כותרת Meta" }),
        description: fields.text({ label: "תיאור Meta" }),
        h1: fields.text({ label: "כותרת עמוד" }),
        intro: fields.textarea({ label: "תקציר" }),
        content: fields.richText({ label: "תוכן המאמר" }),
        image: fields.image({ label: "תמונה ראשית" }),
        category: fields.text({ label: "קטגוריה" }),
        date: fields.date({ label: "תאריך פרסום" }),
      },
    }),
    collection({
      name: "articles",
      label: "מרכז הידע",
      slug: "articles",
      path: "src/content/articles",
      format: "json",
      schema: {
        h1: fields.text({ label: "כותרת המאמר" }),
        intro: fields.textarea({ label: "תקציר" }),
        content: fields.richText({ label: "תוכן המאמר" }),
        category: fields.text({ label: "קטגוריה" }),
        categorySlug: fields.text({ label: "Slug קטגוריה" }),
        icon: fields.text({ label: "אייקון (Emoji)" }),
      },
    }),
  ],
});
