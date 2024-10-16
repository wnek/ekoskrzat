import type { Struct, Schema } from '@strapi/strapi';

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    description2: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.hero': HomepageHero;
    }
  }
}
