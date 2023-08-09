import React from "react";
import { RepoTable } from "./styles";
import RepoLine from "./RepoLine";

type Props = {};

function LastRepos({}: Props) {
  return (
    <div>
      <RepoTable>
        <RepoLine repoName="matheuspinh/repo" description="Repositorio" />
        <RepoLine repoName="matheuspinh/repo" description="Repositorio" />
        <RepoLine repoName="matheuspinh/repo" description="Repositorio" />
        <RepoLine repoName="matheuspinh/repo" description="Repositorio" />
      </RepoTable>
    </div>
  );
}

export default LastRepos;
