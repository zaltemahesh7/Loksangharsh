import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User Not exist!.." });
    }
    const validate = await bcryptjs.compare(password, user.password);
    if (!validate) {
      return NextResponse.json({ message: "Wrong email / password" });
    }
    return NextResponse.json({ message: "Login successfuly", user });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
