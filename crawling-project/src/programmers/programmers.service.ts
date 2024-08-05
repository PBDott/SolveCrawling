import { Injectable } from '@nestjs/common';
import puppeteer, { executablePath } from 'puppeteer';

@Injectable()
export class ProgrammersService {
    async getProgrammers(id: string, repository: string, level: number) {
        let browser = await puppeteer.launch({
            headless: true,
            executablePath: executablePath('chrome')
        });

        try {
            const page = await browser.newPage();
            await page.goto(`https://github.com/${id}/${repository}/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/${level}`);

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
    
    async getProgrammersOne(id: string, repository: string, level: number, number: number ) {
        try {
            const content = await this.getProgrammers(id, repository, level);
            const numberString = number.toString();
            const numberContent = content.filter(title => title.slice(0, numberString.length) === numberString);

            return numberContent;

        } catch (error) {
            console.log(error);
            throw new Error('크롤링 에러');
        }
    }
}
