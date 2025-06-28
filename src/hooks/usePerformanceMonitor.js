import { useEffect, useState } from 'react';

const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
  });

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
      }
    });
    
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lcp.startTime }));
      }
    });
    
    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      // console.warn('Performance monitoring not supported:', error);
    }

    // Set load time when component mounts
    setMetrics(prev => ({ ...prev, loadTime }));

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const logMetrics = () => {
    // console.group('Performance Metrics');
    // console.log('Load Time:', metrics.loadTime.toFixed(2), 'ms');
    // console.log('First Contentful Paint:', metrics.firstContentfulPaint.toFixed(2), 'ms');
    // console.log('Largest Contentful Paint:', metrics.largestContentfulPaint.toFixed(2), 'ms');
    // console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(3));
    // console.groupEnd();
  };

  return { metrics, logMetrics };
};

export default usePerformanceMonitor; 