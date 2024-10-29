import type { Struct, Schema } from '@strapi/strapi';

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_uses';
  info: {
    displayName: 'about-us';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.hero': HomepageHero;
      'homepage.about-us': HomepageAboutUs;
    }
  }
}
