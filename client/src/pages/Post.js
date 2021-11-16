import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Breadcrumb, Loading, Pagination, Review } from "../components";
import {
  getRestaurant,
  getRestaurantReviews,
  postRestaurantReview,
  postidea
} from "../api.js";


function Form({ onSubmit }) {
  const { isAuthenticated } = useAuth0();

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (onSubmit) {
      const record = {
        title: event.target.elements.title.value,
        //comment: event.target.elements.comment.value,
      };
      event.target.elements.title.value = "";
      event.target.elements.comment.value = "";
      onSubmit(record);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="field">
        <div className="control">
          <label className="label">タイトル</label>
          <div className="control">
          <input
              name="title"
              className="input"
              required
              disabled={!isAuthenticated}
            />
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="label">コメント</label>
          <div className="control">
          <textarea
              name="comment"
              className="textarea"
              required
              disabled={!isAuthenticated}
            />
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
        <button
            type="submit"
            className="button is-warning"
            disabled={!isAuthenticated}
          >
            レビューを投稿
          </button>
        </div>
        <p hidden={isAuthenticated}  >ログインが必要です。</p>
      </div>
    </form>
  );
}


export function PostPage() {


  const { getAccessTokenSilently } = useAuth0();



 




  async function handleFormSubmit(record) {
    alert("aaaa")
    await postidea(
      record,
      getAccessTokenSilently
    );
  }


  return (
    <>
      
      <div className="box">
      <Form onSubmit={handleFormSubmit} />
      </div>
    </>
  );
}
