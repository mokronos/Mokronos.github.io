import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Imdb Heatmap',
    link: 'https://mokronos.github.io/imdb-heatmap/',
    Image: require('@site/static/img/showheatmap.png').default,
    description: (
      <>
        Website that shows the IMDb ratings of all the episodes of a TV show in a heatmap.
        It updates every day with the latest ratings.
      </>
    ),
  },
];

function Feature({Image, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link} target="_blank">{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
