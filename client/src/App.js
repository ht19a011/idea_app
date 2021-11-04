import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RootPage } from "./pages/Root.js";
import { RestaurantDetailPage } from "./pages/RestaurantDetail.js";
import { RestaurantListPage } from "./pages/RestaurantList.js";
import { Testtest } from "./pages/test.js";
import { PostPage } from "./pages/Post.js";
import { Totop } from "./pages/Totop";

function AuthButton() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function handleClickLoginButton() {
    loginWithRedirect({
      appState: {
        path: window.location.pathname,
      },
    });
  }

  function handleClickLogoutButton() {
    logout({
      localOnly: true,
    });
  }

  if (isLoading) {
    return (
      <button className="button is-warning is-inverted is-outlined is-loading">
        Loading
      </button>
    );
  }
  if (isAuthenticated) {
    return (
      <button
        className="button is-warning is-inverted is-outlined"
        onClick={handleClickLogoutButton}
      >
        ログアウト
      </button>
    );
  }
  return (
    <button
      className="button is-warning is-inverted is-outlined"
      onClick={handleClickLoginButton}
    >
      ログイン
    </button>
  );
}

function Header() {
  return (
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            アイデア
            <br className="is-hidden-tablet" />
            ラーメンレビュー
          </h1>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer ">
      <div className="content">
        <p className="has-text-centered">
          これは日本大学文理学部情報科学科の開講科目「Web
          プログラミング」の教材として作成されたサンプルアプリケーションです。
        </p>
        <testtest />
      </div>
    </footer>
  );
}




export function App() {
  return (
    <Router>
      <Header />

      <handleFormbutton2 />
      <section className="section has-background-warning-light">
      <Switch>
            <Route path="/" exact>
              <Testtest />
            </Route>
            <Route path="/toukou" exact>
              <Totop />
            </Route>
            <Route path="/restaurants" exact>
              <Testtest />
            </Route>
            <Route path="/restaurants/:restaurantId">
              <Testtest />
            </Route>
          </Switch>

        <div className="container">
          <div className="block has-text-right">

            <AuthButton />
          </div>
          <Switch>
            <Route path="/" exact>
              <RootPage />
            </Route>
            <Route path="/toukou" exact>
              <PostPage />
            </Route>
            <Route path="/restaurants" exact>
              <RestaurantListPage />
            </Route>
            <Route path="/restaurants/:restaurantId">
              <RestaurantDetailPage />
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
}