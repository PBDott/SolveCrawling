import { Injectable } from '@nestjs/common';
import puppeteer, { executablePath } from 'puppeteer';

@Injectable()
export class BaekjoonService {
    async getBaekjoon(id: string, repository: string, rank: string) {
        let browser = await puppeteer.launch({
            headless: true,
            executablePath: executablePath('chrome')
        });

        try {
            const page = await browser.newPage();
            await page.goto(`https://github.com/${id}/${repository}/tree/main/%EB%B0%B1%EC%A4%80/${rank}`);

            const content = await page.evaluate(() => {
                // 'Link--primary' 클래스와 'title' 속성을 이용해 요소 선택
                const elements = Array.from(document.querySelectorAll('a.Link--primary[title]'));
                return elements.map(element => element.getAttribute('title')?.trim() || '');
            });
            let uniqueContent = Array.from(new Set(content));
            return uniqueContent;

        } catch (error) {
            console.log(error);
            throw new Error('크롤링 에러');
        } finally {
            await browser.close();
        }
    } 

    async getBaekjoonOne(id: string, repository: string, rank: string, number: number ) {
        try {
            const content = await this.getBaekjoon(id, repository, rank);
            const numberString = number.toString();
            const numberContent = content.filter(title => title.slice(0, numberString.length) === numberString);

            return numberContent;

        } catch (error) {
            console.log(error);
            throw new Error('크롤링 에러');
        }
    }
}
