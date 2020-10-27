import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotFoundHeading = styled.h1`
  margin-top: 10vh;
  text-align: center;
`;

const pageNotFound = ({ location }) => (
  <Layout location={location}>
    <NotFoundHeading>PAGE NOT FOUND</NotFoundHeading>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam voluptatem deserunt
      suscipit voluptas tempora tenetur animi, maxime facilis perferendis facere provident, fugiat
      porro vel nisi iure doloremque explicabo eaque eum? Dignissimos facilis minus aliquid eaque
      quisquam vitae sunt, veniam nostrum omnis obcaecati facere architecto praesentium quas
      delectus quidem quasi similique qui, totam reprehenderit explicabo quos maxime cumque sed.
      Officiis mollitia magnam doloremque repellat minima ex accusantium officia sapiente asperiores
      quas necessitatibus voluptate reprehenderit dolorem cupiditate quidem tenetur esse nam iure,
      natus labore velit ut illum. Aut quisquam laboriosam id porro, eius sequi qui repellat
      corporis? Excepturi, molestias! Distinctio reiciendis praesentium ipsa quos enim quae
      cupiditate vitae adipisci numquam! Commodi placeat, odit dicta fuga, fugiat consequuntur
      consequatur accusamus veniam qui, sapiente quas corrupti soluta similique recusandae unde
      voluptas? Sint voluptas repellat unde earum, amet similique vitae vero laudantium minima
      necessitatibus deserunt non asperiores, distinctio voluptatum eveniet assumenda, adipisci
      inventore. Quasi temporibus officiis ipsum ut commodi sapiente veritatis dolore veniam! Quis
      amet accusamus officiis minima doloribus repudiandae nesciunt, tempora aperiam quaerat.
      Molestiae nisi alias dolorem tempora rem at neque, labore nostrum, soluta in provident
      voluptatibus, odit aspernatur sequi adipisci cupiditate quasi pariatur debitis blanditiis nam
      quidem asperiores dicta harum. Culpa aperiam itaque sint consequatur facilis exercitationem
      sit beatae ut ipsum dolor maiores voluptatem cumque, perspiciatis dolorem, blanditiis nesciunt
      sed corporis placeat quaerat neque quis. Ratione porro voluptate ab hic assumenda, maiores
      itaque ipsam velit magni et. Nihil nemo vero odit facere voluptates culpa repellat nobis ipsam
      dolorum molestiae sunt illo dicta cumque officia veniam veritatis assumenda deleniti
      consequatur sint excepturi vel, eos dolorem iusto? Non sint vel quasi eum doloremque culpa
      amet consequatur dignissimos reiciendis praesentium quaerat adipisci velit aut corrupti id
      vero deleniti, magni rem. Quis at omnis repellendus autem veritatis reprehenderit pariatur aut
      tenetur nostrum saepe, fugit eaque quidem, soluta accusamus facere assumenda sed! Veniam
      consectetur praesentium rem tempore voluptate et consequatur magnam hic alias, dolorem fugiat
      quam pariatur nostrum corporis iusto in placeat tempora modi aperiam autem libero, atque
      commodi optio. Eos fugiat aperiam delectus aut, dolor ea sint recusandae amet harum, molestias
      aliquam! Nihil nisi porro dicta laboriosam asperiores commodi nesciunt libero, itaque in
      aspernatur accusantium beatae, ratione molestiae quas dolorum fugiat at ab ad voluptatum
      dolores iusto ipsa perspiciatis hic fuga. Odit necessitatibus obcaecati reiciendis dolorum
      ducimus accusamus rem, eius rerum saepe, nesciunt nisi laboriosam sapiente qui! Tempore optio
      reprehenderit unde libero repudiandae eaque deleniti architecto sequi quae nobis fugit sit eum
      quod, exercitationem repellendus fuga consequatur eveniet quo, debitis, aspernatur nulla
      recusandae adipisci? Voluptatibus, optio aliquam incidunt libero molestias itaque harum ipsum!
      Ducimus, molestias porro. Iste soluta quam similique, nobis suscipit, ex est magni corporis at
      voluptatem repellat harum vitae animi officia expedita corrupti omnis sint natus accusamus
      quidem quae minima assumenda nostrum! Unde maxime facilis repudiandae sed consectetur?
      Tempore, maiores accusamus? Voluptatibus debitis distinctio autem tenetur rem sunt et, dolor
      vel, veritatis non aut? Et delectus cum hic amet eaque quod veniam impedit? Consequatur
      suscipit sit quod iusto, laborum quas exercitationem ea quidem id!
    </p>
  </Layout>
);

pageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default pageNotFound;
