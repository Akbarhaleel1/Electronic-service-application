// import Head from 'next/head';
// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import { staticRequest } from 'tinacms';
// import Container from 'components/Container';
// import MDXRichText from 'components/MDXRichText';
// import { formatDate } from 'utils/formatDate';
// import { media } from 'utils/media';
// import { getReadTime } from 'utils/readTime';
// import Header from 'views/SingleArticlePage/Header';
// import MetadataHead from 'views/SingleArticlePage/MetadataHead';
// import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
// import ShareWidget from 'views/SingleArticlePage/ShareWidget';
// import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';

// // Import the CSS file directly
// import '../styles/prism-theme.css'; // Adjust the path as needed

// export default function SingleArticlePage(props) {
//   const contentRef = useRef(null);
//   const [readTime, setReadTime] = useState('');

//   useEffect(() => {
//     calculateReadTime();

//     function calculateReadTime() {
//       const currentContent = contentRef.current;
//       if (currentContent) {
//         setReadTime(getReadTime(currentContent.textContent || ''));
//       }
//     }
//   }, []);

//   const { slug, data } = props;

//   // Ensure data is available
//   if (!data || !data.getPostsDocument || !data.getPostsDocument.data) {
//     return <div>Loading...</div>;
//   }

//   const { title, description, date, tags, imageUrl, body } = data.getPostsDocument.data;
//   const meta = { title, description, date, tags, imageUrl, author: '' };
//   const formattedDate = formatDate(new Date(date));
//   const absoluteImageUrl = imageUrl.replace(/\/+/, '/');

//   return (
//     <>
//       <Head>
//         {/* Add any other head elements here */}
//       </Head>
//       <OpenGraphHead slug={slug} {...meta} />
//       <StructuredDataHead slug={slug} {...meta} />
//       <MetadataHead {...meta} />
//       <CustomContainer id="content" ref={contentRef}>
//         <ShareWidget title={title} slug={slug} />
//         <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
//         <MDXRichText content={body} />
//       </CustomContainer>
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const postsListData = await staticRequest({
//     query: `
//       query PostsSlugs {
//         getPostsList {
//           edges {
//             node {
//               sys {
//                 basename
//               }
//             }
//           }
//         }
//       }
//     `,
//     variables: {},
//   });

//   if (!postsListData) {
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }

//   return {
//     paths: postsListData.getPostsList.edges.map((edge) => ({
//       params: { slug: normalizePostName(edge.node.sys.basename) },
//     })),
//     fallback: false,
//   };
// }

// function normalizePostName(postName) {
//   return postName.replace('.mdx', '');
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const variables = { relativePath: `${slug}.mdx` };
//   const query = `
//     query BlogPostQuery($relativePath: String!) {
//       getPostsDocument(relativePath: $relativePath) {
//         data {
//           title
//           description
//           date
//           tags
//           imageUrl
//           body
//         }
//       }
//     }
//   `;

//   const data = await staticRequest({
//     query: query,
//     variables: variables,
//   });

//   if (!data || !data.getPostsDocument) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { slug, variables, query, data },
//   };
// }

// const CustomContainer = styled(Container)`
//   position: relative;
//   max-width: 90rem;
//   margin: 10rem auto;

//   ${media('<=tablet')} {
//     margin: 5rem auto;
//   }
// `;