import type { Struct, Schema } from '@strapi/strapi';

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    index: Schema.Attribute.Boolean;
    follow: Schema.Attribute.Boolean;
  };
}

export interface HomepageThirdFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_third_features';
  info: {
    displayName: 'thirdFeature';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    thirdFeatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    title: Schema.Attribute.String;
    firstTestimonial: Schema.Attribute.Text;
    firstParents: Schema.Attribute.String;
    secondTestimonial: Schema.Attribute.Text;
    secondParents: Schema.Attribute.String;
    thirdTestimonial: Schema.Attribute.Text;
    thirdParents: Schema.Attribute.String;
  };
}

export interface HomepageStaff extends Struct.ComponentSchema {
  collectionName: 'components_homepage_staff';
  info: {
    displayName: 'staff';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    staffImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageSecondFeature extends Struct.ComponentSchema {
  collectionName: 'components_homepage_second_features';
  info: {
    displayName: 'secondFeature';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    secondFeatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_numbers';
  info: {
    displayName: 'numbers';
  };
  attributes: {
    title: Schema.Attribute.String;
    firstNumber: Schema.Attribute.Integer;
    firstLabel: Schema.Attribute.String;
    secondNumber: Schema.Attribute.Integer;
    secondLabel: Schema.Attribute.String;
    thirdNumber: Schema.Attribute.Integer;
    thirdLabel: Schema.Attribute.String;
    fourthNumber: Schema.Attribute.Integer;
    fourthLabel: Schema.Attribute.String;
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

export interface HomepageJoin extends Struct.ComponentSchema {
  collectionName: 'components_homepage_joins';
  info: {
    displayName: 'Join';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    joinImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface AboutusOneItem extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_one_items';
  info: {
    displayName: 'OneItem';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.seo': SeoSeo;
      'homepage.third-feature': HomepageThirdFeature;
      'homepage.testimonials': HomepageTestimonials;
      'homepage.staff': HomepageStaff;
      'homepage.second-feature': HomepageSecondFeature;
      'homepage.numbers': HomepageNumbers;
      'homepage.mission': HomepageMission;
      'homepage.join': HomepageJoin;
      'homepage.hero': HomepageHero;
      'homepage.first-feature': HomepageFirstFeature;
      'homepage.about-us': HomepageAboutUs;
      'aboutus.one-item': AboutusOneItem;
    }
  }
}
