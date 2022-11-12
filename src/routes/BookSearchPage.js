import axios from "axios";
import React, { useState } from "react";
import MainStyle from "../styles/MainStyle";
import styled from "styled-components";
import { REST_API_KEY } from "../components/Oauth";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
});

const BookSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const BookSearchForm = styled.form`
  position: relative;
  margin-bottom: 40px;
  input {
    width: 700px;
    height: 30px;
    padding: 20px 60px 20px 60px;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  button {
    position: absolute;
    left: 15px;
    bottom: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 30px;
    height: 30px;
    border: none;
  }
`;

const BookList = styled.ul`
  display: grid;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  grid-template-columns: repeat(2, 1fr);
  li {
    width: 80%;
    height: 90vh;
    padding: 50px;
    p {
      text-align: center;
      width: 100%;
      line-height: 20px;
    }
  }
`;

const BookInfoSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  h3 {
    margin: 20px 0px 0px 0px;
    a {
      font-weight: 700;
    }
  }
`;

const BookImageSection = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
  div {
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
  }
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

function BookSearchPage() {
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const bookSearchHandler = (e) => {
    e.preventDefault();
    const params = {
      query: query,
      sort: "accuracy",
      page: 1,
      size: 50,
    };
    Kakao.get("/v3/search/book", { params }).then(({ data }) => {
      setBookList([...data.documents]);
    });
  };
  return (
    <MainStyle>
      <BookSearch>
        <BookSearchForm onSubmit={bookSearchHandler}>
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
          <input
            required
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Books"
          />
        </BookSearchForm>
        <BookList length={bookList.length}>
          {bookList.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <BookImageSection>
                    <img src={book.thumbnail} alt="*" />
                    <div>
                      <h3>가격: {book.price}</h3>
                      <h3>isbn: {book.isbn}</h3>
                    </div>
                  </BookImageSection>
                  <BookInfoSection>
                    <h3>
                      <a href={book.url}>제목: {book.title}</a>
                    </h3>
                    <h3>작가: {book.authors}</h3>
                    <h3>출판사: {book.publisher}</h3>
                  </BookInfoSection>
                </div>
                <p>{book.contents}...</p>
              </li>
            );
          })}
        </BookList>
      </BookSearch>
    </MainStyle>
  );
}

export default BookSearchPage;
