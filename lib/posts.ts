import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(markdownPath) {
  const fullPath = path.join(process.cwd(), markdownPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the markdown content
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}
