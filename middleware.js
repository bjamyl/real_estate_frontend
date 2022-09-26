import { NextResponse } from "next/server";

export default function Middleware(req) {
  let verify = req.cookies.get("authTokens");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if(verify && url.includes('/signUp')){
    return NextResponse.redirect('http://localhost:3000/')
  }
}
