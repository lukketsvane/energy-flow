import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export type Doc = {
  content: string;
  data: { [key: string]: any };
  filePath: string;
};

export function getDocBySlug(slug: string[]): Doc {
  const fullPath = path.join(docsDirectory, `${slug.join('/')}.md`);
  const decodedPath = decodeURIComponent(fullPath); // Decode the URL-encoded path
  const fileContents = fs.readFileSync(decodedPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content, filePath: `/docs/${slug.join('/')}` };
}

export function getAllDocs(): Doc[] {
  function getFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getFiles(filePath, arrayOfFiles);
      } else {
        arrayOfFiles.push(filePath);
      }
    });

    return arrayOfFiles;
  }

  const docFiles = getFiles(docsDirectory);

  const docs = docFiles.map((filePath) => {
    const slug = filePath
      .replace(docsDirectory, '')
      .replace('.md', '')
      .split(path.sep)
      .slice(1);
    return getDocBySlug(slug);
  });

  return docs;
}
