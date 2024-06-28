import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const isDarkTheme = url.searchParams.get("theme") === "dark";

    if (isDarkTheme) {
        cookies().set("JannatinNaimDarkTheme", "true");
    } else {
        cookies().delete("JannatinNaimDarkTheme");
    }

    return NextResponse.json({
        message: "Theme updated.",
    });
}
