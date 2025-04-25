import ImageWrapper from '@/components/ImageWrapper';
import {ExperienceSectionQueryResult} from '../../../../sanity.types';

export default function ExperienceItem({
  data,
}: {
  data: NonNullable<NonNullable<ExperienceSectionQueryResult>['experienceList']>[number];
}) {
  const {workStartDate, workEndDate, jobPosition, companyName, companyLogo, logoDimensions} = data;

  const yearStart = workStartDate ? new Date(workStartDate).getFullYear() : null;

  const yearEnd = workEndDate ? new Date(workEndDate).getFullYear() : null;

  const monthStart = workStartDate
    ? new Date(workStartDate).toLocaleString('en-US', {
        month: 'short',
      })
    : null;

  const monthEnd = workEndDate
    ? new Date(workEndDate).toLocaleString('en-US', {
        month: 'short',
      })
    : null;

  let workPeriod = `${monthStart} ${yearStart}`;
  if (monthEnd !== monthStart || yearEnd !== yearStart) {
    workEndDate != null
      ? (workPeriod = `${workPeriod} - ${monthEnd} ${yearEnd}`)
      : (workPeriod = `${workPeriod} - Present`);
  }

  return (
    <div className="group after:bg-card hover:after:bg-card-hover relative flex w-full flex-col px-5 pt-0 pb-7 after:absolute after:top-auto after:right-0 after:bottom-0 after:-z-10 after:h-[85%] after:w-full after:content-[''] sm:table sm:py-12 sm:pr-2.5 sm:pl-0 sm:after:top-0 sm:after:h-auto sm:after:w-[85%] md:pr-7 xl:after:w-[80%]">
      <div className="table-cell w-full text-center align-middle sm:w-[130px] sm:text-left">
        <h2 className="text-muted group-hover:text-primary m-0 text-center text-7xl leading-[72px] font-[500] sm:text-left">
          {yearStart}
        </h2>
        <p className="text-secondary mt-1 mb-3.5 text-center text-sm sm:text-right">{workPeriod}</p>
      </div>

      <div className="table-cell pl-7 align-middle">
        <h3 className="font-futura mt-0 mb-5 text-2xl font-[500]">{jobPosition}</h3>
        <div className="flex items-center gap-3.5">
          {companyLogo && (
            <ImageWrapper
              image={companyLogo}
              alt={`Logo - ${companyName}`}
              width={logoDimensions?.width}
              height={logoDimensions?.height}
              classesWrapper="h-[25px] w-auto"
            />
          )}
          <p className="text-sm">{companyName}</p>
        </div>
      </div>
    </div>
  );
}
