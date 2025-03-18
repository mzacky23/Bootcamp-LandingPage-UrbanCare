'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 

const ProblemSolution = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (itemKey: string) => {
    if (expandedItem === itemKey) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemKey);
    }
  };

  const problemSolutions = [
    {
      key: 'banjir-kayutangan',
      title: 'Banjir area Kayutangan',
      description: 'Solusi untuk mengatasi banjir di area Kayutangan.',
    },
    {
      key: 'tumpukan-sampah-malang',
      title: 'Tumpukan sampah Malang Kota',
      description: 'Penanganan tumpukan sampah di Malang Kota.',
    },
    {
      key: 'limbah-plastik',
      title: 'Karya hasil pengelolaan limbah plastik',
      description: 'Mengubah limbah plastik menjadi karya bernilai.',
    },
    {
      key: 'sampah-besi',
      title: 'Sampah besi menjadi karya menarik',
      description: 'Mengolah sampah besi menjadi kerajinan unik.',
    },
    {
      key: 'bau-busuk-brantas',
      title: 'Bau busuk sampah organik sungai Brantas',
      description: 'Mengatasi bau busuk sampah organik di sungai Brantas.',
    },
    {
      key: 'tpa-malkot',
      title: 'TPA Malkot',
      description: 'Manajemen dan pengelolaan TPA Malkot.',
    },
  ];

  return (
    <section className="mt-20">
      <div className="w-full">
        <div className="bg-[#EBF4F6] overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center p-10">
            <img
              src="/question-mark.png" 
              alt="Problem Solution"
              className="w-48 h-74 object-cover" 
            />
          </div>

          <div className="w-full md:w-1/2 p-8 text-black">
            <h2 className="text-5xl font-medium mb-6">Problem Solution ?</h2>

            {problemSolutions.map((item) => (
              <div key={item.key} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(item.key)}
                >
                  <p className="text-lg font-medium">{item.title}</p>
                  <span className="text-lg">
                    {expandedItem === item.key ? (
                      <FiChevronUp className="text-black" /> 
                    ) : (
                      <FiChevronDown className="text-black" /> 
                    )}
                  </span>
                </div>

                {expandedItem === item.key && (
                  <p className="text-gray-600 mt-1">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;