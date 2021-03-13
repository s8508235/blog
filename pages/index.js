import Link from "next/link";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const postPages = posts.map(({ frontmatter: { title, description, date }, slug }) => (
    <article key={slug}>
      <header className="mb-2">
        <h3 className="mb-2">
          <Link href={"/post/[slug]"} as={`/post/${slug}`}>
            <a className="text-4xl font-bold text-yellow-600 font-display">
              {title}
            </a>
          </Link>
        </h3>
        <span className="text-sm">{date}</span>
      </header>
      <section>
        <p className="mb-8 text-lg">{description}</p>
      </section>
    </article>
  ));
  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageData = postPages
    .slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(postPages.length / PER_PAGE);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  }

  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      <div>
        {currentPageData}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'flex-1 flex justify-between mb-8 mt-4'}
          previousLinkClassName={currentPage === 0 ? 'disabled hidden' : ''}
          nextLinkClassName={currentPage === (pageCount-1) ? 'disabled hidden' : ''}
          pageClassName={'hidden'}
          breakClassName={'hidden'}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
