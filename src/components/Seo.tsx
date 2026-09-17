import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from '../data/studioData';
import { buildBusinessSchema, getCanonicalUrl, routeMeta, SITE_CONFIG } from '../seo/siteConfig';

const DEFAULT_TITLE = SITE_CONFIG.title;

export const Seo: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const workSlug = pathname.startsWith('/work/') ? pathname.replace('/work/', '') : null;
    const project = workSlug ? PROJECTS.find((item) => item.slug === workSlug) : null;

    const meta = project
      ? {
          title: `${project.title} | Case Study | ShelterBrand`,
          description: `${project.client} ${project.category.toLowerCase()} project in ${project.industry}. ${project.description}`,
          type: 'website',
        }
      : routeMeta[pathname] || routeMeta['/work'] || routeMeta['/'];

    document.title = meta.title || DEFAULT_TITLE;

    const setMeta = (selector: string, value: string, attribute = 'content') => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        const isPropertySelector = selector.includes('property=');
        const attrName = isPropertySelector ? 'property' : 'name';
        const attrValue = selector.match(/(?:name|property)="([^"]+)"/)?.[1] ?? '';
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:type"]', meta.type || 'website');
    setMeta('meta[property="og:url"]', getCanonicalUrl(location.pathname));
    setMeta('meta[property="og:image"]', SITE_CONFIG.image);
    setMeta('meta[property="og:site_name"]', SITE_CONFIG.siteName);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
    setMeta('meta[name="twitter:image"]', SITE_CONFIG.image);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = getCanonicalUrl(pathname);

    let script = document.head.querySelector('#shelterbrand-business-schema');
    if (script) {
      script.remove();
    }

    const schemaScript = document.createElement('script');
    schemaScript.id = 'shelterbrand-business-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(buildBusinessSchema());
    document.head.appendChild(schemaScript);
  }, [location.pathname]);

  return null;
};
