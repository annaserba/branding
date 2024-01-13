import type {NextApiRequest} from 'next'
import { NextResponse } from 'next/server';
import { renderToString } from "react-dom/server"
export async function GET(request: NextApiRequest) {
 const reactComp = renderToString(<></>);
    return new NextResponse(JSON.stringify({ message: "Welcome John Doe" }), {
    status: 200,
  });
} 