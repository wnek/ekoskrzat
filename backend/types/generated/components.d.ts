import type { Schema, Struct } from '@strapi/strapi';

export interface AboutusOneItem extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_one_items';
  info: {
    description: '';
    displayName: 'OneItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_uses';
  info: {
    description: '';
    displayName: 'aboutUs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFirstFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_first_features';
  info: {
    description: '';
    displayName: 'firstFeature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.String;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageJoin extends Struct.ComponentSchema {
  collectionName: 'components_homepage_joins';
  info: {
    displayName: 'Join';
  };
  attributes: {
    description: Schema.Attribute.String;
    joinImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageMission extends Struct.ComponentSchema {
  collectionName: 'components_homepage_missions';
  info: {
    description: '';
    displayName: 'mission';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface HomepageNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_numbers';
  info: {
    displayName: 'numbers';
  };
  attributes: {
    firstLabel: Schema.Attribute.String;
    firstNumber: Schema.Attribute.Integer;
    fourthLabel: Schema.Attribute.String;
    fourthNumber: Schema.Attribute.Integer;
    secondLabel: Schema.Attribute.String;
    secondNumber: Schema.Attribute.Integer;
    thirdLabel: Schema.Attribute.String;
    thirdNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface HomepageSecondFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_second_features';
  info: {
    description: '';
    displayName: 'secondFeature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    secondFeatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageStaff extends Struct.ComponentSchema {
  collectionName: 'components_homepage_staff';
  info: {
    description: '';
    displayName: 'staff';
  };
  attributes: {
    description: Schema.Attribute.Text;
    staffImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    firstParents: Schema.Attribute.String;
    firstTestimonial: Schema.Attribute.Text;
    secondParents: Schema.Attribute.String;
    secondTestimonial: Schema.Attribute.Text;
    thirdParents: Schema.Attribute.String;
    thirdTestimonial: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageThirdFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_third_features';
  info: {
    description: '';
    displayName: 'thirdFeature';
  };
  attributes: {
    thirdFeatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'Seo';
  };
  attributes: {
    follow: Schema.Attribute.Boolean;
    index: Schema.Attribute.Boolean;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutus.one-item': AboutusOneItem;
      'homepage.about-us': HomepageAboutUs;
      'homepage.first-feature': HomepageFirstFeature;
      'homepage.hero': HomepageHero;
      'homepage.join': HomepageJoin;
      'homepage.mission': HomepageMission;
      'homepage.numbers': HomepageNumbers;
      'homepage.second-feature': HomepageSecondFeature;
      'homepage.staff': HomepageStaff;
      'homepage.testimonials': HomepageTestimonials;
      'homepage.third-feature': HomepageThirdFeature;
      'seo.seo': SeoSeo;
    }
  }
}
