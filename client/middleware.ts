import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    // Verifica si el usuario está autenticado
    const currentUser = request.cookies.get("currentUser");

    if (currentUser) {
      // Si el usuario está autenticado, puede permancer en la posición actual
      return NextResponse.next();
    } else {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error(error);
    // En caso de error, manejarlo apropiadamente
    return NextResponse.error();
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
