
import { Injectable } from '@nestjs/common'
import * as ReactDOMServer from 'react-dom/server'
import Home from "../component/Home"

@Injectable()
export class SsrService {
    renderReactApp(): string {
        const reactString = ReactDOMServer.renderToString(<Home/>);
        return `<!DOCTYPE html><html><head><title>NestJS React SSR</title></head><body>${reactString}</body></html>`;
    }
}