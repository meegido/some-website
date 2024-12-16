import styles from './pagination.module.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePageChange: (direction: 'next' | 'previous') => void;
}

const Pagination = ({ page, totalPages, handlePageChange }: PaginationProps) => {
  return (
    <div className={styles.pagination__wrappper}>
      <button onClick={() => handlePageChange('previous')}>Previous</button>
      <p>
        {page} of {totalPages}
      </p>
      <button onClick={() => handlePageChange('next')}>Next</button>
    </div>
  );
};

export default Pagination;
