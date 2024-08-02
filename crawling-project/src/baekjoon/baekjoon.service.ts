import { Injectable } from '@nestjs/common';
import puppeteer, { executablePath } from 'puppeteer';

@Injectable()
export class BaekjoonService {
    async getBeakjoon(board: string) {
        let browser = await puppeteer.launch({
            headless: true,
            executablePath: executablePath('chrome')
        });

        try {
            const page = await browser.newPage();
            await page.goto('https://github.com/PBDott/Algorithm/tree/main/%EB%B0%B1%EC%A4%80/Bronze');

            const content = await page.evaluate(() => {
                // 'Link--primary' 클래스와 'title' 속성을 이용해 요소 선택
                const elements = Array.from(document.querySelectorAll('a.Link--primary[title]'));
                return elements.map(element => element.getAttribute('title')?.trim() || '');
            });

            return content;

        } catch (error) {
            console.log(error);
            throw new Error('크롤링 에러');
        } finally {
            await browser.close();
        }
    } 
}
