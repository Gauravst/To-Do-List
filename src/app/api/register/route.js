import user from "@/models/user";
import { connectMongoDB } from "@/utils/dbConn";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, pass } = await req.json();
    const hashPass = await bcrypt.hash(pass, 10);
		const data = { name: name, email: email, password: hashPass };

    await connectMongoDB();
    await user.create(data);

    return NextResponse.json({ message: "User Registered" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Some error occurred" },
      { status: 500 }
    );
  }
}
