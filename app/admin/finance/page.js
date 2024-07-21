"use client";
import { useState, useEffect } from "react";
import { getFinanceReport } from "../../../api/route"; // Thêm các hàm API tương ứng
import { useSession } from "next-auth/react";

const FinancePage = () => {
  const { data: session } = useSession();
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (session) {
      const fetchReport = async () => {
        const reportData = await getFinanceReport(session.token);
        setReport(reportData);
      };
      fetchReport();
    }
  }, [session]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý tài chính</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Báo cáo tài chính</h2>
        {report ? (
          <div>
            <p>Tổng doanh thu: {report.totalRevenue}</p>
            <p>Tổng lợi nhuận: {report.totalProfit}</p>
            <p>Báo cáo chi tiết: {report.detailedReport}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FinancePage;
