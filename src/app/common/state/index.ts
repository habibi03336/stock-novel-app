import CompanySearchImpl from "./controller/CompanySearchImpl";
import CompanySearcherImpl from "./service/CompanySearcherImpl";
import CompanyRepositoryImpl from "./repository/CompanyRepositoryImpl";
import CompaniesFinancesByPeriodAndMarketImpl from "./controller/CompaniesFinancesByPeriodImpl";
import CompanyFinanceRepositoryImpl from "./repository/CompanyFinanceRepositoryImpl";
import CompanyMarketRepositoryImpl from "./repository/CompanyMarketRepositoryImpl";

export const companySearch = new CompanySearchImpl(
	new CompanySearcherImpl(new CompanyRepositoryImpl())
);

export const companiesFinancesByPeriod =
	new CompaniesFinancesByPeriodAndMarketImpl(
		new CompanyFinanceRepositoryImpl(),
		new CompanyMarketRepositoryImpl()
	);
