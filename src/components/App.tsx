import React from 'react';
import { SectionTitle } from './section-title/SectionTitle';
import { Card } from './card/card';
import './App.scss';
import '../ga.js';

import { story, hacks } from './data.json';


type LINK = {text:string, link:string};
type TEXT = {text:string};

// let bannerUrl = 'https://muumuse.com/wp-content/uploads/2018/04/utada-hikaru-hatsukoi-e1524633984786.jpg'
//let bannerUrl = 'assets/jj.jpg';
// https://thenewstack.io/the-dumbfounding-making-of-the-github-octocat-figurine/
let ghBannerUrl = 'assets/gh.jpg';
// https://thenalc.org/blog/projects/daily-bible-readings/
let boBannerUrl = 'assets/readings.png';

function parseLinks(text:string): Array<LINK|TEXT> {

  let links:LINK[];
  let result: Array<LINK|TEXT> = [];
  let m = text.match(/\[([^\]]*)\]\(([^\)]*)\)/g)
  if (m) {
    
    
    links = m.map((md) => {
      let _m = md.match(/\[([^\]]*)\]\(([^\)]*)\)/) as string[];
      let text = _m[1];
      let link = _m[2];
      return { text, link };
    });

    let s=0, e=0;
    m.forEach((_m, i) => {
      s = text.indexOf(_m);
      result.push({text:text.substring(e, s)})
      e = s + _m.length;
      result.push(links[i])
    });
    result.push({text:text.substring(e, text.length)})


    console.log('res', result)
    return result;
  }
  return [{text}];
}

export const App = () => (
  <>
    <div className="h100 iblock col-xs-12 col-sm-1 col-md-2"></div>

    <div className="iblock col-xs-12 col-sm-10 col-md-9">
      <SectionTitle 
        className="col-xs-11"
        title="Story"
        active={true}
        bannerUrl='assets/snow.jpg'>
      
        <p>
        {parseLinks(story).map(({text, link}:any) => {
            if (link) {
              return <a 
                id={`story-${text}`}
                target="_blank"
                href={link}>
                  {text}
              </a>
            }
            return text;
          })
        }</p>

      </SectionTitle>
      
      {/* <i className="material-icons">note</i> */}

      <SectionTitle 
        className="col-xs-11"
        active={true}
        title="Github hacks"
        bannerUrl={ghBannerUrl}>
        
        {
          hacks.map(({name, description, url, github}:any) => (
            <Card className="col-xs-12 col-sm-6 col-md-5"
                url={url}
                code={github}
                title={name}>
              {description.map(
                (d:string) => (<div>{d}</div>)
              )}
            </Card>
            )
          )
        }


      </SectionTitle>
      

      <SectionTitle 
        className="col-xs-11"
        active={true}
        title="Templates & Notes"
        bannerUrl={boBannerUrl}>

          <Card
            title="Interactive Templates"
            code="Templates"
            url="https://yoga1290.github.io/Templates"
            className="col-xs-12 col-sm-6 col-md-5">
            {`Code snippets that are generated on browser in real time
              includes templates for JSON-Schema, PlantUML, express.js, Sails & Spring
              `}
            </Card>

          <Card
            title="Notes"
            url="https://github.com/yoga1290/cheatsheets"
            className="col-xs-12 col-sm-6 col-md-5">
            {`My notes & cheatsheets for FFMPEG, Docker, eZ platform, Python/PyTorch, JS, Java/Spring & more
              `.split('\n').map(
              (line:string) => (<div>{line}</div>)
            )}
            </Card>

      </SectionTitle>
      
  {/* 
      <SectionTitle 
        className="col-xs-5"
        title="Hacks"
        bannerUrl={bannerUrl}/> */}
      </div>
  </>
);
