import type { Struct, Schema } from '@strapi/strapi';

export interface HomepageStaff extends Struct.ComponentSchema {
  collectionName: 'components_homepage_staff';
  info: {
    displayName: 'staff';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface HomepageMission extends Struct.ComponentSchema {
  collectionName: 'components_homepage_missions';
  info: {
    displayName: 'mission';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

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

export interface HomepageFirstFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_first_features';
  info: {
    displayName: 'firstFeature';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface HomepageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_uses';
  info: {
    displayName: 'aboutUs';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.staff': HomepageStaff;
      'homepage.mission': HomepageMission;
      'homepage.hero': HomepageHero;
      'homepage.first-feature': HomepageFirstFeature;
      'homepage.about-us': HomepageAboutUs;
    }
  }
}
