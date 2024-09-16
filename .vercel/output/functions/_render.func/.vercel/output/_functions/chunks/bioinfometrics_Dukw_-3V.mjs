import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_bMn8tCat.mjs';
import 'kleur/colors';
import { $ as $$PostLayout } from './PostLayout_DfMFYcdH.mjs';

const html = "<h1 id=\"introduction\">Introduction</h1>\n<p><strong>Bioinfometrics</strong> is an innovative AI-driven platform designed to deliver context-aware recommendations and insights into the biological sector. By leveraging advanced technologies such as Next.js, TypeScript, TailwindCSS, and ClaudeLLM on the frontend, and Python, TensorFlow, FastAPI, and PineconeDB on the backend, Bioinfometrics offers a powerful tool for visualizing data and understanding trends in biology. Hosted on Vercel with the API running on an Ubuntu server configured with Nginx, this project exemplifies a seamless integration of modern technologies to provide actionable, data-driven insights.</p>";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","pubDate":"2024-02-10T00:00:00.000Z","title":"Bioinfometrics","description":"Explore cutting-edge insights and data on biological sectors with Bioinfometrics. Our platform delivers unique perspectives on industry trends to keep you well-informed and ahead of the curve.","excerpt":"Welcome to Bioinfometrics, where biology meets cutting-edge AI.","category":"projects","image":"/images/bioinfometrics.webp","author":"Martin DAVILA","tags":["Next.js","React","TypeScript","JavaScript","Node.js","TailwindCSS","Python","NumPy","Pandas","Docker","TensorFlow","PyTorch","HuggingFace","ClaudeLLM","PineconeDB","FastAPI","AI","Linux","Ubuntu","Nginx","Vercel","Web","Git","GitHub","AzureDevOps","AmazonAWS","AmazonS3"],"projectURL":"https://www.bioinfometrics.com/","repoURL":"https://github.com/iMartinDav/bioinfometrics","minutesRead":"1 min read"};
				const file = "/Users/martindavila/Developer/projects-imartin.dev/src/content/posts/bioinfometrics.md";
				const url = undefined;
				function rawContent() {
					return "\n# Introduction\n\n**Bioinfometrics** is an innovative AI-driven platform designed to deliver context-aware recommendations and insights into the biological sector. By leveraging advanced technologies such as Next.js, TypeScript, TailwindCSS, and ClaudeLLM on the frontend, and Python, TensorFlow, FastAPI, and PineconeDB on the backend, Bioinfometrics offers a powerful tool for visualizing data and understanding trends in biology. Hosted on Vercel with the API running on an Ubuntu server configured with Nginx, this project exemplifies a seamless integration of modern technologies to provide actionable, data-driven insights.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"introduction","text":"Introduction"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
