import React, { PropTypes } from 'react';
import { SubHeading } from 'components';
import { Wrapper, RelatedJobLink } from './styles';
import { Title, SubText } from 'components';

const RelatedJobList = ({jobs}) => {
  return (
    <Wrapper>
      <SubHeading>Other Positions</SubHeading>
      {jobs.map(job => {
        return (
          <RelatedJobLink key={job.id} to={`/jobs/${job.id}`}>
            <Title>{job.jobTitle}</Title>
            <SubText>{job.area}</SubText>
          </RelatedJobLink>
        );
      })}
    </Wrapper>
  )
}


const propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      jobTitle: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

RelatedJobList.propTypes = propTypes;
export default RelatedJobList;