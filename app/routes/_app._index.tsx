import { useCallback } from 'react';
import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import styled from '@emotion/styled';
import { flexSet, boxSet, colorSet } from '@styles/mixin';
import { CONTENT_PAGE } from '@constants/data/content';
import { META_PAGE } from '@constants/data/meta';
import AtomsCustomTitle from '@components/title/custom';
import AtomsCustomButton from '@components/button/custom';

export const meta: MetaFunction = () => [
  // default seo
  { title: META_PAGE.default.title },
  { name: 'description', content: META_PAGE.default.description },
  { name: 'keywords', content: META_PAGE.default.keywords },
  { name: 'og:image', content: META_PAGE.default.ogImage },
];

export const loader = async () => {
  return json({
    message: 'Remix Awesome Starter🔥',
  });
};

export default function Index() {
  const { message } = useLoaderData<{ message: string }>();
  // hooks
  const navigate = useNavigate();
  // variable
  const bodyContent = CONTENT_PAGE.main.body;
  const buttonContent = CONTENT_PAGE.main.button;

  /** functions */
  const onClickRouteToContent = useCallback(() => {
    navigate('/content');
  }, []);

  /** default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <AtomsCustomTitle title={bodyContent} description={message} />
        <AtomsCustomButton
          text={buttonContent.text}
          color={buttonContent.color}
          onClickFunction={onClickRouteToContent}
        />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${flexSet('center', 'center', 'row')};
  ${boxSet('100%', '100vh')};
  ${colorSet('black', '#fffed3')};
`;

const StyledContentBox = styled.div`
  ${flexSet('center', 'center', 'column')};
  gap: 25px;
`;
