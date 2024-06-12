import { Request, Response } from 'express';

export function getCompanies(db: any, req: Request, res: Response) {
  let query = 'SELECT * FROM swsCompany';

  if (req.query.pastSharePrice === 'true') {
    query = `
      SELECT swsCompany.name as Name, swsCompany.score_id as Score , swsCompanyPriceClose.price as PastSharePrice, swsCompanyPriceClose.date_created as PastSharePriceDate
      FROM swsCompany
      LEFT JOIN swsCompanyPriceClose ON swsCompany.id = swsCompanyPriceClose.company_id
    `;
  }
  
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  });
}
