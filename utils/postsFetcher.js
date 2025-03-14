import matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';

export async function getAllPosts() {
  return Promise.all(getAllPostsSlugs().map(getSinglePost));
}

export function getAllPostsSlugs() {
  return fs.readdirSync(getPostsDirectory()).map(normalizePostName);
}

function normalizePostName(postName) {
  return postName.replace('.mdx', '');
}

export async function getSinglePost(slug) {
  const filePath = path.join(getPostsDirectory(), slug + '.mdx');
  const contents = fs.readFileSync(filePath, 'utf8');
  const { data: meta, content } = matter(contents);

  return { slug, content, meta: meta };
}

export function getPostsDirectory() {
  let basePath = process.cwd();
  return path.join(basePath, 'posts');
}
