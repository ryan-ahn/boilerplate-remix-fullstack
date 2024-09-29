import { useCallback } from "react";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import styled from "@emotion/styled";
import { flexSet, boxSet, colorSet } from "@styles/mixin";
import { CONTENT_PAGE } from "@constants/data/content";
import { META_PAGE } from "@constants/data/meta";
import AtomsCustomTitle from "@components/title/custom";
import AtomsCustomButton from "@components/button/custom";

export const meta: MetaFunction = () => [
  // page seo
  { title: META_PAGE.content.title },
  { name: "description", content: META_PAGE.content.description },
  { name: "keywords", content: META_PAGE.content.keywords },
  { name: "og:image", content: META_PAGE.content.ogImage },
];

export const loader = async () => {
  return json({
    data: "Contents Page!",
  });
};

export default function Index() {
  const { data } = useLoaderData<{ data: string }>();
  // hooks
  const navigate = useNavigate();
  // variable
  const bodyContent = CONTENT_PAGE.content.body;
  const buttonContent = CONTENT_PAGE.content.button;

  /* functions */
  const onClickRouteToMain = useCallback(() => {
    navigate("/");
  }, []);

  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <AtomsCustomTitle title={bodyContent} description={data} />
        <AtomsCustomButton
          text={buttonContent.text}
          color={buttonContent.color}
          onClickFunction={onClickRouteToMain}
        />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${flexSet("center", "center", "row")};
  ${boxSet("100%", "100vh")};
  ${colorSet("black", "#ffd0d0")};
`;

const StyledContentBox = styled.div`
  ${flexSet("center", "center", "column")};
  gap: 25px;
`;
