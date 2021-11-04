import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../api.js";
import { Loading, Restaurant } from "../components";

export function Totop() {
  return (
    <div className="control">
      <Link className="button is-warning" to="/">
        TOPへ
      </Link>
    </div>
  );
}
