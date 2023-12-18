import React from "react";

const BlogDetail = (post) => {
  return (
    <section className="blog-detail">
      <div className="inner">
        <h3 className="detail-ttl">{post[0].title.rendered}</h3>
        <div className="detail-cont">
          <p
            dangerouslySetInnerHTML={{
              __html: post[0].content.rendered,
            }}
          ></p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
