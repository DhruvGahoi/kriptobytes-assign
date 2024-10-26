import React from 'react';
import { Project } from '../../types';
import { ChevronRight, Clock, CheckCircle } from 'lucide-react';

export const ProjectCard: React.FC<Project> = ({
  title,
  code,
  date,
  priority,
  tasks,
  activeTasks,
  assignees,
  description,
  progress = 0
}) => {
  const getPriorityColor = (priority: Project['priority']): string => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number): string => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm text-gray-500 font-mono">{code}</span>
            <span 
              className={`px-2 py-1 text-xs rounded-full font-medium ${getPriorityColor(priority)}`}
            >
              {priority}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            <Clock className="inline-block w-4 h-4 mr-1" />
            Created {date}
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-800">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Description if available */}
      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-gray-900">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`${getProgressColor(progress)} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Stats and Assignees */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-8">
          <div>
            <p className="text-sm text-gray-500 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              All tasks
            </p>
            <p className="font-medium text-gray-900">{tasks}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Active tasks</p>
            <p className="font-medium text-gray-900">{activeTasks}</p>
          </div>
        </div>
        
        {/* Team members */}
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {assignees.map((assignee, index) => (
              <img
                key={index}
                src={assignee}
                alt={`Team member ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          {assignees.length > 3 && (
            <span className="ml-2 text-sm text-gray-600">
              +{assignees.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
