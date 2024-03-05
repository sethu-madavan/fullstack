export default function RechargeHistory() {

  const tableItems = [
      {
          name: "Liam James",
          email: "liamjames@example.com",
          position: "2 -Months",
          salary: "$25"
      },
      {
          name: "Olivia Emma",
          email: "oliviaemma@example.com",
          position: "28 Days",
          salary: "$10"
      },
      {
          name: "William Benjamin",
          email: "william.benjamin@example.com",
          position: "365 Days",
          salary: "$120"
      },
      {
          name: "Henry Theodore",
          email: "henrytheodore@example.com",
          position: "3 - Months",
          salary: "$40"
      },
      {
          name: "Amelia Elijah",
          email: "amelia.elijah@example.com",
          position: "3 - Months",
          salary: "$45"
      },
  ]

  return (
      <div>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-lg">
                  <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                      Recharge History
                  </h3>
              </div>
              <div className="mt-[150px] ml-[150px] shadow-sm border rounded-lg overflow-x-auto">
                  <table className="w-full table-auto text-sm text-left">
                      <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                          <tr>
                              <th className="py-3 px-6">Customer Name</th>
                              <th className="py-3 px-6">E-mail</th>
                              <th className="py-3 px-6">Validity</th>
                              <th className="py-3 px-6">Price</th>
                          </tr>
                      </thead>
                      <tbody className="text-gray-600 divide-y">
                          {
                              tableItems.map((item, idx) => (
                                  <tr key={idx}>
                                      <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                      <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                      <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                      <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
}